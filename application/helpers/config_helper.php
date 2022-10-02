<?php
function gigades($get = null)
{
    switch ($get) {
        case 'key':
            return "959B82AED46F4D2854AB83C4FDA8F";
            break;
        case 'url':
            return "http://v3.phoenixkreatifdigital.com/rest/api/";
            break;
        default:
            return "http://v3.phoenixkreatifdigital.com/rest/api/";
            break;
    }
}

function auth()
{
    $CI = &get_instance();
    $CI->load->library('session');
    $sesion = $CI->session->userdata("login");
    return $sesion;
}
