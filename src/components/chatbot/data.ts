// Data layer - Pure data objects, no logic
export interface ConversationData {
	initialMessage: Message;
	quickReplies: QuickReply[];
	serviceCategories: ServiceCategory[];
	formConfigs: Record<string, FormConfig>;
	responses: ResponseMap;
}

export interface Message {
	id: string;
	text: string;
	sender: "user" | "bot";
	timestamp: Date;
	type?: "text" | "quick_reply" | "form" | "success";
	options?: QuickReply[];
	formData?: Record<string, string>;
}

export interface QuickReply {
	text: string;
	action: string;
	icon?: React.ComponentType<{ className?: string }>;
	color?: string;
}

export interface ServiceCategory {
	title: string;
	description: string;
	features: string[];
}

export interface FormField {
	name: string;
	label: string;
	type: "text" | "email" | "tel" | "select" | "textarea";
	required?: boolean;
	placeholder?: string;
	options?: string[];
}

export interface FormConfig {
	id: string;
	title: string;
	icon: React.ComponentType<{ className?: string }>;
	fields: FormField[];
	submitAction: (data: Record<string, string>) => Promise<void>;
}

export interface ResponseMap {
	[key: string]: {
		message: string;
		nextAction?: string;
		formId?: string;
		delay?: number;
	};
}

// Default conversation data
export const defaultConversationData: ConversationData = {
	initialMessage: {
		id: "1",
		text: "Hi! I'm your GANETHRA assistant. I'm here to help you with technology solutions, quotes, and connecting you with our team. How can I assist you today?",
		sender: "bot",
		timestamp: new Date(),
		type: "quick_reply",
		options: [
			{
				text: "Get a Quote",
				action: "quote",
				color: "from-blue-500 to-blue-600",
			},
			{
				text: "Our Services",
				action: "services",
				color: "from-purple-500 to-purple-600",
			},
			{
				text: "Contact Us",
				action: "contact",
				color: "from-green-500 to-green-600",
			},
			{
				text: "Budget Estimator",
				action: "budget",
				color: "from-orange-500 to-orange-600",
			},
		],
	},
	quickReplies: [
		{
			text: "Get a Quote",
			action: "quote",
			color: "from-blue-500 to-blue-600",
		},
		{
			text: "Our Services",
			action: "services",
			color: "from-purple-500 to-purple-600",
		},
		{
			text: "Contact Us",
			action: "contact",
			color: "from-green-500 to-green-600",
		},
		{
			text: "Budget Estimator",
			action: "budget",
			color: "from-orange-500 to-orange-600",
		},
	],
	serviceCategories: [
		{
			title: "Web Development",
			description: "Modern, responsive websites and web applications",
			features: [
				"React & Next.js",
				"Node.js Backend",
				"Database Design",
				"API Integration",
			],
		},
		{
			title: "Mobile Apps",
			description: "Native and cross-platform mobile applications",
			features: [
				"React Native",
				"Flutter",
				"iOS/Android",
				"App Store Optimization",
			],
		},
		{
			title: "Cloud Solutions",
			description: "Scalable cloud infrastructure and DevOps",
			features: [
				"AWS/Azure/GCP",
				"Docker & Kubernetes",
				"CI/CD Pipelines",
				"Monitoring",
			],
		},
		{
			title: "Cybersecurity",
			description: "Comprehensive security solutions",
			features: [
				"Security Audits",
				"Penetration Testing",
				"Compliance",
				"Threat Detection",
			],
		},
		{
			title: "AI & Machine Learning",
			description: "Intelligent solutions and automation",
			features: [
				"Custom AI Models",
				"Data Analytics",
				"Process Automation",
				"Predictive Analytics",
			],
		},
		{
			title: "Digital Transformation",
			description: "End-to-end digital transformation services",
			features: [
				"Process Optimization",
				"Legacy Migration",
				"Change Management",
				"Training",
			],
		},
	],
	formConfigs: {
		quote: {
			id: "quote",
			title: "Quote Request",
			icon: () => null,
			fields: [
				{
					name: "name",
					label: "Name *",
					type: "text",
					required: true,
					placeholder: "Your full name",
				},
				{
					name: "email",
					label: "Email *",
					type: "email",
					required: true,
					placeholder: "your@email.com",
				},
				{
					name: "company",
					label: "Company",
					type: "text",
					placeholder: "Your company name",
				},
				{
					name: "projectType",
					label: "Project Type *",
					type: "select",
					required: true,
					options: [
						"Web Development",
						"Mobile App Development",
						"Cloud Solutions",
						"Cybersecurity",
						"AI/ML Solutions",
						"Digital Transformation",
						"E-commerce Platform",
						"Custom Software",
					],
				},
				{
					name: "description",
					label: "Project Description",
					type: "textarea",
					placeholder: "Tell us about your project requirements...",
				},
			],
			submitAction: async (data) => {
				// Default implementation - can be overridden
				console.log("Quote form submitted:", data);
			},
		},
		contact: {
			id: "contact",
			title: "Contact Information",
			icon: () => null,
			fields: [
				{
					name: "name",
					label: "Name *",
					type: "text",
					required: true,
					placeholder: "Your full name",
				},
				{
					name: "email",
					label: "Email *",
					type: "email",
					required: true,
					placeholder: "your@email.com",
				},
				{
					name: "phone",
					label: "Phone",
					type: "tel",
					placeholder: "+1 (555) 123-4567",
				},
				{
					name: "company",
					label: "Company",
					type: "text",
					placeholder: "Your company name",
				},
				{
					name: "message",
					label: "Message",
					type: "textarea",
					placeholder: "How can we help you?",
				},
			],
			submitAction: async (data) => {
				console.log("Contact form submitted:", data);
			},
		},
		budget: {
			id: "budget",
			title: "Budget Estimator",
			icon: () => null,
			fields: [
				{
					name: "project",
					label: "Project Type *",
					type: "select",
					required: true,
					options: [
						"Web Development",
						"Mobile App Development",
						"Cloud Solutions",
						"Cybersecurity",
						"AI/ML Solutions",
						"Digital Transformation",
						"E-commerce Platform",
						"Custom Software",
					],
				},
				{
					name: "budget",
					label: "Budget Range *",
					type: "select",
					required: true,
					options: [
						"Under $5,000",
						"$5,000 - $15,000",
						"$15,000 - $50,000",
						"$50,000 - $100,000",
						"Over $100,000",
					],
				},
				{
					name: "timeline",
					label: "Timeline",
					type: "select",
					options: ["ASAP", "1-3 months", "3-6 months", "6+ months"],
				},
			],
			submitAction: async () => {
				// Budget form doesn't submit to API, just shows confirmation
				return Promise.resolve();
			},
		},
	},
	responses: {
		quote: {
			message:
				"Great! I'd love to help you get a personalized quote. Let me gather some information about your project.",
			formId: "quote",
			delay: 500,
		},
		services: {
			message: "Here are our comprehensive technology services:",
			nextAction: "show_services",
			delay: 1000,
		},
		contact: {
			message:
				"I'd be happy to connect you with our team! Let me get your contact information.",
			formId: "contact",
			delay: 500,
		},
		budget: {
			message:
				"Let's estimate your project budget! This will help us provide you with accurate pricing.",
			formId: "budget",
			delay: 500,
		},
		show_services: {
			message:
				"Which service interests you most? I can provide more details or help you get a quote!",
			nextAction: "service_options",
		},
		service_options: {
			message: "What would you like to do next?",
		},
	},
};

