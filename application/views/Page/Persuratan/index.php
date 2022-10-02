<div class="row">
    <!-- [ sample-page ] start -->
    <div class="col-sm-12">
        <div class="card">

            <div class="card-header">
                <h5><?= $title ?? "" ?></h5>
                <div class="card-header-right">
                    <div class="btn-group card-option">
                        <button class="btn btn-primary btn-sm surat_baru">
                            <i class="mdi mdi-feather"></i> Buat Surat Baru
                        </button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Kode Surat</th>
                                    <th>Nama Surat</th>
                                    <th>Digunakan</th>
                                    <th>Tipe</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                $i = 1;
                                foreach ($data as $v) : ?>
                                    <tr>
                                        <td><?= $i++ ?></td>
                                        <td><?= $v['kode_surat'] ?></td>
                                        <td><?= $v['name'] ?></td>
                                        <td class="<?= $v['digunakan'] > 0 ? "text-success" : "text-danger" ?>"><?= $v['digunakan'] ?></td>
                                        <td><label class="badge <?= $v['role_letter'] == 'public' ? 'badge-success' : 'badge-primary' ?>"><?= $v['role_letter'] ?></label></td>
                                        <td>
                                            <div style="display: flex; justify-content: space-evenly;">
                                                <!-- <button class="btn btn-outline-secondary btn-rounded btn-sm btn-icon text-primary it-center">
                                                    <i class="mdi mdi-eye"></i>
                                                </button> -->
                                                <button onclick="func___edit(`<?= base64_encode(json_encode($v)) ?>`)" class="btn btn-outline-secondary btn-rounded btn-sm btn-icon text-success it-center">
                                                    <i class="mdi mdi-reproduction"></i>
                                                </button>
                                                <button class="btn btn-outline-secondary btn-rounded btn-sm btn-icon text-danger it-center" onclick="func___delete(`<?= base64_encode(json_encode($v)) ?>`)">
                                                    <i class="mdi mdi-delete"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                <?php endforeach; ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- [ sample-page ] end -->
</div>