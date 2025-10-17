export const submitForm = async (
	formType: "contact" | "quote",
	formData: Record<string, string | number | boolean | FormDataEntryValue>,
) => {
	let slug = "";
	if (formType === "quote") slug = "/quote";

	try {
		const res = await fetch(`https://helper.ganethra.com/contact${slug}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		});
		if (!res.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await res.json();
		return data;
	} catch (error) {
		console.error("Error submitting form:", error);
		throw error;
	}
};
