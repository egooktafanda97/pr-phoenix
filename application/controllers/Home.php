<?php

use SebastianBergmann\Environment\Console;

defined('BASEPATH') or exit('No direct script access allowed');

class Home extends CI_Controller
{
    public function index()
    {
        $data = [
            "title" => "Nasabah",
            "page" => "Home/index",
            "script" => "Home/script",
        ];
        $this->load->view('Router/route', $data);
    }
}
