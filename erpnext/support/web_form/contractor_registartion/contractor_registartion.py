import frappe

@frappe.whitelist()
def get_context(context):
	# do your magic here
	pass
	# return context
	# self.name_of_the_worker=context
	# frappe.msgprint("Hiiii")
