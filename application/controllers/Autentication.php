<?php

use SebastianBergmann\Environment\Console;

defined('BASEPATH') or exit('No direct script access allowed');

class Autentication extends CI_Controller
{
    public function index()
    {
        $this->load->view('auth/login');
    }
    public function auth()
    {
    }
}
