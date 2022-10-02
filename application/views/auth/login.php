<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Phoenix Kd</title>
    <!-- plugins:css -->
    <link rel="stylesheet" href="<?= base_url("assets/template/") ?>assets/vendors/mdi/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="<?= base_url("assets/template/") ?>assets/vendors/css/vendor.bundle.base.css">
    <!-- endinject -->
    <!-- Plugin css for this page -->
    <!-- End plugin css for this page -->
    <!-- inject:css -->
    <!-- endinject -->
    <!-- Layout styles -->
    <link rel="stylesheet" href="<?= base_url("assets/template/") ?>assets/css/style.css">
    <!-- End layout styles -->
    <!-- favicon icon -->
    <link rel="shortcut icon" href="https://phoenixkreatifdigital.com//assets_phoenix_website/images/logo-phoenix.png" />
</head>

<body>
    <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
            <div class="row w-100 m-0">
                <div class="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
                    <div class="card col-lg-4 mx-auto" style="background-color: rgba(25, 28, 36,.5) !important;">
                        <div class="card-body px-5 py-5">
                            <h3 class="card-title text-left mb-3">Login Nteng</h3>
                            <form id="login">
                                <div class="form-group">
                                    <label>Username</label>
                                    <input name="username" type="text" class="form-control p_input" id="username">
                                </div>
                                <div class="form-group">
                                    <label>Password *</label>
                                    <input name="password" type="password" class="form-control p_input" id="password">
                                </div>
                                <div class="form-group d-flex align-items-center justify-content-between">
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input"> Remember me </label>
                                    </div>
                                    <a href="#" class="forgot-pass">Forgot password</a>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary btn-block enter-btn">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- content-wrapper ends -->
            </div>
            <!-- row ends -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
    <!-- plugins:js -->
    <script src="<?= base_url("assets/template/") ?>assets/vendors/js/vendor.bundle.base.js"></script>
    <!-- endinject -->
    <!-- Plugin js for this page -->
    <!-- End plugin js for this page -->
    <!-- inject:js -->
    <script src="<?= base_url("assets/template/") ?>assets/js/off-canvas.js"></script>
    <script src="<?= base_url("assets/template/") ?>assets/js/hoverable-collapse.js"></script>
    <script src="<?= base_url("assets/template/") ?>assets/js/misc.js"></script>
    <script src="<?= base_url("assets/template/") ?>assets/js/settings.js"></script>
    <script src="<?= base_url("assets/template/") ?>assets/js/todolist.js"></script>
    <!-- endinject -->
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.27.2/axios.min.js"></script>

    <script>
        $(document).ready(function() {
            $('#login').submit(function(e) {
                e.preventDefault();
                var username = $('#username').val();
                var password = $('#password').val();
                const form_data = new FormData();
                form_data.append('username', username);
                form_data.append('password', password);
                axios.post('<?= base_url("Autentication/auth") ?>', form_data)
                    .then(function(res) {
                        if (res.data.status == 'error') {
                            if (res.data.result == 'username') {
                                $('#msg-username').html(res.data.msg);

                            } else {
                                $('#msg-password').html(res.data.msg);
                            }
                        } else {
                            sessionStorage.setItem('auth', JSON.stringify(res.data.result));
                            setTimeout(function() {
                                window.location.href = '<?= base_url("Home") ?>';
                            }, 1000);
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
            });
        });
    </script>

</body>

</html>