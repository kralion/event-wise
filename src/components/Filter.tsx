import { Tag, Input, Select, Space, Button } from "antd";
import "animate.css";
import { filterTags } from "./../data/filterTags.ts";
import { filterTag } from "./../interfaces/interfaces";
import { CloseCircleFilled } from "@ant-design/icons";
import { useState, useRef } from "react";
import type { InputRef } from "antd";

function Filter() {
	const deleteFilterTag = (filterTag: filterTag) => {
		filterTags.filter((tag: filterTag) => tag.id !== filterTag.id);
	};
	const filterInputRef = useRef<InputRef>(null);
	const deleteInputs = () => {
		filterInputRef.current === null;
	};
	const [filterCleanerVisible, setFilterCleanerVisible] = useState(true);
	return (
		<div className=" flex gap-4 mx-3 mb-3 justify-between items-center">
			<Select className="text-sm w-40" id="filters" placeholder="Filter by">
				<Select.Option value="priority">Priority</Select.Option>
				<Select.Option value="categories">Categories</Select.Option>
				<Select.Option value="stakeholders">Stakeholders</Select.Option>
			</Select>
			<Input
				placeholder="tags"
				ref={filterInputRef}
				suffix={
					filterCleanerVisible ? (
						<CloseCircleFilled
							onClick={deleteInputs}
							className="cursor-pointer hover:text-blue-500 animate__animated animate__flipInX"
						/>
					) : null
				}
			/>
		</div>
	);
}

export default Filter;
