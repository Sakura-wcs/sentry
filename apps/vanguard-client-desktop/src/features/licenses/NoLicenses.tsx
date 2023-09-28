import {AiFillWarning} from "react-icons/ai";
import {Dispatch, SetStateAction} from "react";

const noLicenseCopy = [
	{
		header: "One license equals one claim",
		body: "Your node will be able to send one claim for each license owned",
	},
	{
		header: "Claims are sent to challenges",
		body: "Xai Vanguard Nodes send claims to verification challenges on the network",
	},
	{
		header: "Claims receive network rewards",
		body: "Once the challenge is finished, winning claims receive network rewards",
	},
]

interface NoLicensesProps {
	setShowModal: Dispatch<SetStateAction<boolean>>
}

export function NoLicenses({setShowModal}: NoLicensesProps) {

	function getLicenseContent() {
		return noLicenseCopy.map((item, i) => {
			return (
				<div
					key={`connect-wallet-content-${i}`}
					className="max-w-sm flex flex-col justify-center bg-[#F5F5F5] p-6 rounded-lg gap-4"
				>
					<div className="flex flex-row items-center gap-2">
						<p className="w-6 h-6 flex items-center justify-center text-lg bg-red-500 text-white rounded-full">{i + 1}</p>
						<p className="text-lg font-semibold">{item.header}</p>
					</div>
					<p className="text-base text-[#525252]">{item.body}</p>
				</div>
			)
		})
	}

	return (
		<div className="w-full h-auto flex flex-col justify-center items-center">
			<div className="absolute w-auto bottom-0 top-0 flex flex-col justify-center items-center gap-4">
				<AiFillWarning className="w-16 h-16 text-[#D4D4D4]"/>
				<p className="text-xl font-semibold">You don’t own any licenses</p>
				<p className="text-base text-[#525252]">Buy a license to start participating in network
					challenges</p>

				<button
					onClick={() => setShowModal(true)}
					className="w-52 bg-[#F30919] text-white p-4 uppercase font-semibold mt-2"
				>
					Buy Now
				</button>
			</div>

			<div className="absolute bottom-0 mb-24 flex flex-col justify-center items-center gap-6 text-2xl">
				<h3 className="font-semibold">
					How licensing works
				</h3>
				<div className="flex flex-row justify-center items-center gap-10 p-6">
					{getLicenseContent()}
				</div>
			</div>
		</div>
	)
}