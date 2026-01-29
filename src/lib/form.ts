export const submitForm = async (
	formType: "contact" | "quote" | "generic",
	formData: Record<string, string | number | boolean | FormDataEntryValue>,
) => {
	let slug = "";
	if (formType === "quote") slug = "/quote";
	if (formType === "generic") slug = "/generic";
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_HELPER_SERVICE}/contact${slug}`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			},
		);
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
