export type Product = {
	id: string;
	name: string;
	category: string;
	price: number;
	description: string;
	/** CSS background value used for the product's placeholder image. */
	gradient: string;
	initial: string;
};

export const products: Product[] = [
	{
		id: 'classic-tee',
		name: 'Classic Tee',
		category: 'Apparel',
		price: 28,
		description: 'Soft organic-cotton tee with a relaxed everyday fit.',
		gradient: 'linear-gradient(135deg, #3245ff, #bc52ee)',
		initial: 'T',
	},
	{
		id: 'heavyweight-hoodie',
		name: 'Heavyweight Hoodie',
		category: 'Apparel',
		price: 64,
		description: 'Brushed-fleece hoodie built for all-day comfort.',
		gradient: 'linear-gradient(135deg, #111827, #4b5563)',
		initial: 'H',
	},
	{
		id: 'embroidered-cap',
		name: 'Embroidered Cap',
		category: 'Accessories',
		price: 32,
		description: 'Structured six-panel cap with an embroidered logo.',
		gradient: 'linear-gradient(135deg, #0ea5e9, #22d3ee)',
		initial: 'C',
	},
	{
		id: 'canvas-tote',
		name: 'Canvas Tote',
		category: 'Accessories',
		price: 24,
		description: 'Durable everyday tote with a roomy interior.',
		gradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
		initial: 'T',
	},
	{
		id: 'ceramic-mug',
		name: 'Ceramic Mug',
		category: 'Drinkware',
		price: 18,
		description: '12 oz dishwasher-safe mug in a matte glaze.',
		gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
		initial: 'M',
	},
	{
		id: 'insulated-bottle',
		name: 'Insulated Bottle',
		category: 'Drinkware',
		price: 34,
		description: 'Double-walled bottle keeps drinks cold for 24h.',
		gradient: 'linear-gradient(135deg, #10b981, #34d399)',
		initial: 'B',
	},
	{
		id: 'sticker-pack',
		name: 'Sticker Pack',
		category: 'Stationery',
		price: 9,
		description: 'Set of six weatherproof vinyl stickers.',
		gradient: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
		initial: 'S',
	},
	{
		id: 'art-print',
		name: 'Art Print',
		category: 'Stationery',
		price: 22,
		description: 'Giclée print on archival cotton paper.',
		gradient: 'linear-gradient(135deg, #64748b, #94a3b8)',
		initial: 'P',
	},
];

export const categories: string[] = ['All', ...new Set(products.map((p) => p.category))];
