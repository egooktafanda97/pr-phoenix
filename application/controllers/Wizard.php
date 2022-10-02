<?php

use SebastianBergmann\Environment\Console;

defined('BASEPATH') or exit('No direct script access allowed');

class Wizard extends CI_Controller
{
    // constructor
    private $page = "Persuratan/";
    public function __construct()
    {
        parent::__construct();
    }
    public function index()
    {
        // print_r(json_decode($this->getSurat()));
        // die();
        $data = [
            "title" => "Persuratan",
            "page" => $this->page . "index",
            "script" => $this->page . "script",
            "data" => json_decode($this->getSurat(), true)
        ];
        $this->load->view('Router/route', $data);
    }
    public function getSurat()
    {
        $requestSurat = CurlPost(gigades("url") . "v1-wizard/getPapper", [
            "api-key" => gigades("key")
        ]);

        return $requestSurat;
    }
    public function netletter()
    {
        $this->load->view('Wizard/engine');
    }
    public function updateWizard()
    {
        $data = [
            "type" => "edit"
        ];
        $this->load->view('Wizard/engine', $data);
    }
    public function delete()
    {
        $requestSurat = CurlPost(gigades("url") . "v1-wizard/deletePapper", [
            "api-key" => gigades("key"),
            "id_wizard_template" => $_POST['id_wizard_template']
        ]);

        echo json_encode($requestSurat);
    }
}
