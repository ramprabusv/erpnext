// // Copyright (c) 2023, Frappe Technologies Pvt. Ltd. and contributors
// // For license information, please see license.txt

frappe.ui.form.on('Contractor Attendance', {
    refresh(frm) {
        if (frm.doc.__islocal) {
            // frappe.msgprint("Hellooo");
            new frappe.ui.Scanner({
                dialog: true, // open camera scanner in a dialog
                multiple: false, // stop after scanning one value
                on_scan(data) {
                    var nameWorker = data.decodedText;

                    frm.call({
                        doc: frm.doc,
                        method: 'frm_call',
                        args: {
                            name_worker: nameWorker,
                        },
                        callback: function (r) {

                            frappe.msgprint(r.message)
                            if (r.message == 'Entry') {
                                // window.location.href = 'http://127.0.0.1:8000/app/contractor-attendance';
                                window.location.href = 'http://127.0.0.1:8000/agkl-maintenance';

                            }
                            else if (r.message == 'Exit') {
                                // window.location.href = 'http://127.0.0.1:8000/app/contractor-attendance';
                                // window.location.href = 'http://127.0.0.1:8000/app/contractor-attendance/new-contractor-attendance-xbfxtaidgg';
                                window.location.href = 'http://127.0.0.1:8000/agkl-maintenance';

                            }
                            else {
                                // window.location.href = 'http://127.0.0.1:8000/app/contractor-attendance';
                                // window.location.href = 'http://127.0.0.1:8000/app/contractor-attendance/new-contractor-attendance-xbfxtaidgg';
                                window.location.href = 'http://127.0.0.1:8000/agkl-maintenance';

                            }


                        }
                    });

                }
            });

        }
    },

});


