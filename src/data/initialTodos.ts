import { nanoid } from "nanoid";
import { Todo } from "../interfaces/interfaces";
export const initialTodos: Todo[] = [
	{
		id: nanoid(),
		title: "Meet with John Doe",
		description:
			"Work with Jhon Doe, to discuss the new project details and features to be implemented",
		priority: "low",
		date: "2023-05-18",
		duration: "10:00 - 11:00",
		category: "personal",
		isFinished: false,
		stakeholders: 3,
	},
	{
		id: nanoid(),
		
  title: "Product Launch Conference",
  description: "Organize a conference to unveil our new product line and showcase its features to potential clients and partners.",
  priority: "high",
  date: "2023-05-15",
  duration: "09:00 - 17:00",
  category: "corporate",
  isFinished: false,
  stakeholders: 8

	},
	{
		id: nanoid(),
		title: "Team Building Retreat",
  description: "Plan a team building retreat to foster collaboration, boost morale, and strengthen the bonds within the organization.",
  priority: "medium",
  date: "2023-06-10",
  duration: "09:00 - 18:00",
  category: "corporate",
  isFinished: false,
  stakeholders: 5
	},
	{
		id: nanoid(),
		title: "Quarterly Business Review",
  description: "Conduct a comprehensive review of the company's performance, financials, and strategic goals with key stakeholders and department heads.",
  priority: "medium",
  date: "2023-08-05",
  duration: "14:00 - 16:00",
  category: "corporate",
  isFinished: false,
  stakeholders: 20
	},
];
