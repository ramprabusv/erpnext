frappe.pages['agkl-contractors'].on_page_load = function (wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		// title: 'Agnikul Contractors',
		single_column: true
	});
	$(frappe.render_template("agkl_contractors",{
		// qr_code:"Hiiiiii SVR"
	})).appendTo(page.body);


	let $mark_attendance_btn = document.getElementById("markAttendanceButton").addEventListener("click", function () {
		window.location.href = 'http://127.0.0.1:8000/app/contractor-qr-scan';
	});

	let $attendance_list = document.getElementById("contractorsAttendanceButton").addEventListener("click", function () {
		window.location.href = 'http://127.0.0.1:8000/app/contractor-attendance/view/report';
		
		

	});
	let $contractor_reg = document.getElementById("contractorRegisterButton").addEventListener("click", function () {

	window.location.href ="http://127.0.0.1:8000/contractor-registartion/new"
	});

	
}