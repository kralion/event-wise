import React from "react";

type LoginP = {
	setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

function Login({ setIsLogin }: LoginP) {
	return (
		<div
			data-aos="fade-in"
			data-aos-delay="600"
			data-aos-duration="1000"
			className="mt-24 w-96 mx-auto font-Ubuntu"
		>
			<div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-neutral-100 dark:border-neutral-300">
				<form className="space-y-6">
					<h3 className="text-[23px] text-center mb-16 mt-7 font-medium dark:text-gray-900 text-white ">
						Sign in to
						<span className="font-bold"> InTodo </span>
					</h3>
					<div>
						<label
							htmlFor="email"
							className="text-sm font-medium dark:text-gray-900 block mb-2 text-gray-300"
						>
							Your email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-200 dark:placeholder-gray-100 dark:text-white"
							placeholder="name@company.com"
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="text-sm font-medium dark:text-gray-900 block mb-2 text-gray-300"
						>
							Your password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="••••••••"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-200 dark:placeholder-gray-100 dark:text-white"
						/>
					</div>
					<div className="flex items-start">
						<div className="flex items-start">
							<div className="flex items-center h-5">
								<input
									id="remember"
									aria-describedby="remember"
									type="checkbox"
									className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-300 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
								/>
							</div>
							<div className="text-sm ml-3">
								<label
									htmlFor="remember"
									className="font-medium dark:text-gray-900 text-gray-300"
								>
									Remember me
								</label>
							</div>
						</div>
						<a
							href="www.google.com"
							className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500"
						>
							Lost Password?
						</a>
					</div>
					<button
						onClick={() => setIsLogin(true)}
						type="submit"
						className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Login to your account
					</button>
					<div className="text-sm font-medium dark:text-gray-500 text-gray-300">
						Not registered?{" "}
						<a
							href="www.instagram.com"
							className="text-blue-700 hover:underline dark:text-blue-500"
						>
							Create account
						</a>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
