export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ⬅️ IMPORTANT: params ko await karna padta hai

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p className="text-4xl">
        Profile Page{" "}
        <span className="p-2 rounded bg-orange-500 text-black">{id}</span>
      </p>
    </div>
  );
}

// export default function UserProfile({ params }: any) {
//   return (
//     <div>
//       <div className="flex flex-col items-center justify-center min-h-screen py-2">
//         <h1>Profile</h1>
//         <hr />
//         <p className="text-4xl">
//           Profile Page
//           <span className="p-2 rounded bg-orange-500 text-black">
//             {params.id}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// interface Props {
//   params: Promise<{ id: string }>;
// }

// export default async function UserProfile({ params }: Props) {
//   const { id } = await params; // ← THIS FIXES THE ERROR

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//       <h1>Profile</h1>
//       <hr />
//       <p className="text-4xl">
//         Profile Page{" "}
//         <span className="p-2 rounded bg-orange-500 text-black">{id}</span>
//       </p>
//     </div>
//   );
// }

// ******* 3 *****
// file: app/profile/[id]/page.tsx
