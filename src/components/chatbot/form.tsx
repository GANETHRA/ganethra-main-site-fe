"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
	Calculator,
	Phone,
	DollarSign,
	CheckCircle,
	Loader2,
} from "lucide-react";
import type { FormConfig, FormField } from "./data";

interface FormRendererProps {
	formConfig: FormConfig;
	onSubmit: (data: Record<string, string>) => Promise<void>;
	onCancel: () => void;
	isSubmitting?: boolean;
}

export function FormRenderer({
	formConfig,
	onSubmit,
	onCancel,
	isSubmitting = false,
}: FormRendererProps) {
	const [formData, setFormData] = useState<Record<string, string>>({});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await onSubmit(formData);
	};

	const handleFieldChange = (fieldName: string, value: string) => {
		setFormData((prev) => ({ ...prev, [fieldName]: value }));
	};

	const getIcon = () => {
		switch (formConfig.id) {
			case "quote":
				return Calculator;
			case "contact":
				return Phone;
			case "budget":
				return DollarSign;
			default:
				return CheckCircle;
		}
	};

	const IconComponent = getIcon();

	return (
		<Card className="gap-0 py-4">
			<CardHeader className="px-6 pb-2">
				<CardTitle className="flex items-center space-x-2 text-sm">
					<IconComponent className="h-4 w-4" />
					<span>{formConfig.title}</span>
				</CardTitle>
			</CardHeader>
			<Separator />
			<CardContent>
				<form onSubmit={handleSubmit} className="space-y-4 mt-4">
					{formConfig.fields.map((field) => (
						<FormFieldRenderer
							key={field.name}
							field={field}
							value={formData[field.name] || ""}
							onChange={(value) => handleFieldChange(field.name, value)}
						/>
					))}

					<div className="flex gap-2 pt-2">
						<Button type="submit" disabled={isSubmitting} className="flex-1">
							{isSubmitting ? (
								<>
									<Loader2 className="mr-2 h-4 w-4 animate-spin" />
									Submitting...
								</>
							) : (
								"Submit"
							)}
						</Button>
						<Button type="button" variant="outline" onClick={onCancel}>
							Cancel
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}

interface FormFieldRendererProps {
	field: FormField;
	value: string;
	onChange: (value: string) => void;
}

function FormFieldRenderer({ field, value, onChange }: FormFieldRendererProps) {
	const fieldId = `field-${field.name}`;

	return (
		<div className="space-y-2">
			<Label htmlFor={fieldId} className="text-sm">
				{field.label}
			</Label>

			{field.type === "textarea" ? (
				<Textarea
					id={fieldId}
					name={field.name}
					value={value}
					onChange={(e) => onChange(e.target.value)}
					required={field.required}
					placeholder={field.placeholder}
					rows={3}
					className="resize-none"
				/>
			) : field.type === "select" ? (
				<Select
					value={value}
					onValueChange={onChange}
					required={field.required}
				>
					<SelectTrigger className="w-full">
						<SelectValue
							placeholder={`Select ${field.label.toLowerCase().replace("*", "")}`}
						/>
					</SelectTrigger>
					<SelectContent>
						{field.options?.map((option) => (
							<SelectItem key={option} value={option}>
								{option}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			) : (
				<Input
					id={fieldId}
					name={field.name}
					type={field.type}
					value={value}
					onChange={(e) => onChange(e.target.value)}
					required={field.required}
					placeholder={field.placeholder}
				/>
			)}
		</div>
	);
}
