import React from 'react';
import { signOut } from 'next-auth/react';
import useCurrentUser from '@/hooks/useCurrentUser';

interface AccountManuProps {
	visible?: boolean;
}

const AccountManu: React.FC<AccountManuProps> = ({ visible }) => {
	const { data } = useCurrentUser();

	if (!visible) {
		return null;
	}

	return (
		<div className=" bg-black absolute w-56 top-14 right-0 py-5 border-2 border-gray-800 flex flex-col">
			<div className=" flex flex-col gap-3">
				<div className=" px-3 group/item flex flex-row gap-3 items-center w-full">
					<img className=" w-8 rounded-md" src="/images/default-red.png" alt="logo" />
					<p className=" text-white text-sm group-hover/item:underline">{data?.name}</p>
				</div>
				<hr className=" bg-gray-600 border-0 h-px my-4" />
				<div
					onClick={() => {
						signOut();
					}}
					className=" px-3 text-white text-center hover:underline"
				>
					Sing out of Netflix
				</div>
			</div>
		</div>
	);
};

export default AccountManu;
