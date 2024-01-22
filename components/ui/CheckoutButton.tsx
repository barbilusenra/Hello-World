"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";
import loading from "@/images/loading.svg";
import LoadingSpinner from "./LoadingSpinner";
import { useSubscriptionStore } from "@/store/store";
import ManageAccountButton from "./ManageAccountButton";

function CheckoutButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const subscription = useSubscriptionStore((state) => state.subscription);

  const isLoadingSubscription = subscription === undefined;

  const isSubscribed =
    subscription?.status === "active" ;

  const createCheckoutSession = async () => {
    if (!session?.user.id) return;

    setLoading(true);

    const docRef = await addDoc(
      collection(db, "customers", session.user.id, "checkout_sessions"),
      {
        price: "price_1OIHtVJf7PapmRUqFs2WJsju",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );

    return onSnapshot(docRef, (snap) => {
      console.log(snap);
      const data = snap.data();
      const url = data?.url;
      const error = data?.error;

      if (error) {
        alert(`An error occured: ${error.message}`);
        setLoading(false);
      }
      if (url) {
        window.location.assign(url);
        setLoading(false);
      }
    });
  };

  return (
    <div className="flex flex-col space-y-2">
      {isSubscribed && (
        <>
        <hr className="mt-5" />
        <p className="pt-5 text-center text-xs font-semibold tracking-wide text-green-300">
          You are suscribed to PRO
        </p>        
        </>
      )}
      <div       
       className="bg-pink-600 hover:bg-pink-700 text-white font-bold 
       py-2 px-[80px] rounded-full animate-pulse"
      >
        {isSubscribed ? (
          <ManageAccountButton />
        ) : isLoadingSubscription || loading ? (
          <LoadingSpinner />
        ) : (
        <button onClick={() => createCheckoutSession()}>Sign Up</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutButton;
