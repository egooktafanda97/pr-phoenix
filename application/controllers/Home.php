<?php

use SebastianBergmann\Environment\Console;

defined('BASEPATH') or exit('No direct script access allowed');

class Home extends CI_Controller
{
    // constructor
    private $page = "Home/";
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $data = [
            "title" => "Nasabah",
            "page" => $this->page . "index",
            "script" => $this->page . "script",
        ];
        $this->load->view('Router/route', $data);
    }
}
