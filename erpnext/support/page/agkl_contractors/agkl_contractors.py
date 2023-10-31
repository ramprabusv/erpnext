import frappe

@frappe.whitelist() #allow_guest=True)
def get_my_data():
    data = frappe.get_list("Contractor Attendance", filters={}, fields=["name_worker", "attendance_date","in_time","out_time"])
    return data
