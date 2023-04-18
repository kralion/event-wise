import { Tag, Input, Select } from "antd";
import "animate.css";
import { filterTags } from "./../data/filterTags.ts";
import { filterTag } from "./../interfaces/interfaces";

function Filter() {
	const deleteFilterTag = (filterTag: filterTag) => {
		filterTags.filter((tag: filterTag) => tag.id !== filterTag.id);
	};
	return (
		<div className="animate__animated animate__flipInX flex gap-4 mx-3 mb-3 justify-between items-center">
			<Select className="text-sm w-40" id="filters" placeholder="Filter by">
				<Select.Option value="priority">Priority</Select.Option>
				<Select.Option value="categories">Categories</Select.Option>
				<Select.Option value="stakeholders">Stakeholders</Select.Option>
			</Select>
			<Input placeholder="tags" />
		</div>
	);
}

export default Filter;
