'use client';

import { generatePortalLink } from '../../app/actions'
import { useSession } from "next-auth/react";


function ManageAccountButton() {
  const {data: session} = useSession();

    if(!session?.user.id) return;


    const { user: { id }} = session;
    if(!id) return;
    console.log(id);

  return (
   <form action={() => generatePortalLink(id)}>
    <button type="submit" disabled={!id}>Manage Billing</button>
   </form>
  );
}

export default ManageAccountButton;