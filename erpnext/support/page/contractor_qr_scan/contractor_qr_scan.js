frappe.pages['contractor-qr-scan'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'SVR',
		single_column: true
	});
	$(frappe.render_template("contractor_qr_scan",{
		qr_code:"Hiiiiii SVR"
	})).appendTo(page.body);

	// frappe.ready(function () {
	// 	frappe.msgprint("Helloooo")
	// });

		let $Entry_btn = document.getElementById("Entry").addEventListener("click", function ()  {
			videoOverlay.style.display = "block";
			const scanner = new Instascan.Scanner({ video: document.getElementById('preview') });

			scanner.addListener('scan', function (content) {
				// Redirect to the result page with the scanned data as a query parameter
				// window.location.href = '/result?data=' + content;
				frappe.call({
					method: 'erpnext.support.page.contractor_qr_scan.contractor_qr_scan.qr_code_tx',
					args: {
						name_worker: content,
						entry_or_exit: "Entry",


					},
					callback: function (r) {
						frappe.msgprint(r.message)
					}
				});
			});

			Instascan.Camera.getCameras().then(function (cameras) {
				if (cameras.length > 0) {
					scanner.start(cameras[0]);
				} else {
					console.error('No cameras found.');
				}
			}).catch(function (e) {
				console.error(e);
			});
		})
		let $Exit_btn = document.getElementById("Exit").addEventListener("click",function ()  {
			videoOverlay.style.display = "block";
			
			const scanner = new Instascan.Scanner({ video: document.getElementById('preview') });

			scanner.addListener('scan', function (content) {
				// Redirect to the result page with the scanned data as a query parameter
				// window.location.href = '/result?data=' + content;
				frappe.call({
					method: 'erpnext.support.page.contractor_qr_scan.contractor_qr_scan.qr_code_tx',
					args: {
						name_worker: content,
						entry_or_exit: "Exit",

					},
					callback: function (r) {
						frappe.msgprint(r.message)
					}
				});
			});

			Instascan.Camera.getCameras().then(function (cameras) {
				if (cameras.length > 0) {
					scanner.start(cameras[0]);
				} else {
					console.error('No cameras found.');
				}
			}).catch(function (e) {
				console.error(e);
			});
		})
		videoOverlay.addEventListener("click", function() {
            videoOverlay.style.display = "none";
        });

		
	// let field = page.add_field({
	// 	label:'attendance',
	// 	fieldtype: 'Button',
	// 	fieldname: 'attendance_cont',
	// action() {
	// 		console.log(1);
	// 	}
	// });
}
