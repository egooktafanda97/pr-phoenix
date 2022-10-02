<script>
    function func___edit(data) {
        const mainData = atob(data);
        sessionStorage.setItem("dataEdit", mainData);
        sessionStorage.setItem("phase", "edit")

        if (sessionStorage.getItem("dataEdit") != undefined) {
            window.location.href = "<?= base_url("Wizard/updateWizard") ?>"
        }

    }

    function func___delete(data) {
        const mainData = JSON.parse(atob(data));
        swal({
            title: "Yakin!!",
            text: "Surat yang terhapus akan menghapus semua surat terbuat!!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                const form_data = new FormData();
                form_data.append("id_wizard_template", mainData.id_wizard_template)
                async function deletedFunc(data) {
                    const del = await axios.post("<?= base_url("Wizard/delete") ?>", data).catch((e) => {
                        console.log(e);
                    });
                    if (del?.status ?? 400 == 200) {

                        swal("Success", "Berhasil menghapus", "success").then((ev) => {
                            if (ev) {
                                window.location.reload();
                            }
                        });
                    } else {

                        swal("Success", "Gagal menghapus", "error").then((ev) => {
                            if (ev) {
                                window.location.reload();
                            }
                        });
                    }
                }
                deletedFunc(form_data);
            }
        });
    }

    $(".surat_baru").click(function() {
        sessionStorage.removeItem("dataEdit")
        window.location.href = "<?= base_url("Wizard/netletter") ?>"
    })
</script>