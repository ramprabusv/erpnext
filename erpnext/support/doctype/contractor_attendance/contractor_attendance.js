// // Copyright (c) 2023, Frappe Technologies Pvt. Ltd. and contributors
// // For license information, please see license.txt

frappe.ui.form.on('Contractor Attendance', {
    refresh(frm) {
        if (frm.doc.__islocal) {
            // # msgprint with server and client side action
            frappe.prompt(
                {
                    label: 'Entry Name',
                    fieldname: 'entry_exit',
                    fieldtype: 'Select',
                    options: "Entry\nExit"
                },

                (values) => {
                    var user_option = values.entry_exit
                    console.log(values.entry_exit);
                    frappe.msgprint(user_option).$wrapper.css({
                        'background-color': 'green'
                    });


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
                                    entry_or_exit: user_option,
                                },
                                callback: function (r) {

                                    frappe.msgprint(r.message)
                                    setTimeout(function () {
                                        window.location.href = 'http://127.0.0.1:8000/agkl-maintenance';

                                    }, 2000);



                                }
                            });

                        }
                    });
                    

                  
                }).$wrapper.css({
                    'background-color': 'green'});
                
        }
    },

});


