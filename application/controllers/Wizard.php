<?php

use SebastianBergmann\Environment\Console;

defined('BASEPATH') or exit('No direct script access allowed');

class Wizard extends CI_Controller
{
    public function index()
    {
        $this->load->view('Wizard/engine');
    }
    public function netletter()
    {
        $this->load->view('Wizard/engine');
    }
}
