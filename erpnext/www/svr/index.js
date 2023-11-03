// console.log('Hi')

// let $btn = page.set_primary_action('Go home',() => window.location.href ="http://127.0.0.1:8000/app/agkl-contractors")
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
					method: 'erpnext.www.svr.index.qr_code_tx',
					args: {
						name_worker: content,
						entry_or_exit: "Entry",
					},
					callback: function (r) {
						frappe.msgprint(r.message)
						setTimeout(function () {
							window.location.href = 'http://127.0.0.1:8000/svr';

						}, 2000);
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
					method: 'erpnext.www.svr.index.qr_code_tx',
					args: {
						name_worker: content,
						entry_or_exit: "Exit",

					},
					callback: function (r) {
						frappe.msgprint(r.message)
						setTimeout(function () {
							window.location.href = 'http://127.0.0.1:8000/svr';

						}, 2000);

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