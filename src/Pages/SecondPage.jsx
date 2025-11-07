import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";


function Second() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const birthday = new Date(currentYear, 10,25);  

       
      if (now.getDate() === 25 && now.getMonth() === 10) {
         
        setShowPopup(true);
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }

      
      if (now > birthday) {
        birthday.setFullYear(currentYear + 1);
      }

      
      const diff = birthday - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, mins, secs });
      setShowPopup(false);
    };

    
    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);
    // 📧 Send message via EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      alert("Please write something before sending!");
      return;
    }

    setIsSending(true);

    emailjs
      .send(
        "service_803poy6", //   EmailJS Service ID
        "template_u0hitfm", //   Template ID
        {
          message,
          to_name: "Priyanshu",  
          from_name: "Motii",  
        },
        "ekgdsgcx4iaeSXvEu" //   EmailJS Public Key
      )
      .then(() => {
        alert("💌 Message sent successfully!");
        setMessage("");
      })
      .catch((err) => {
        alert("❌ Failed to send message. Error: " + err.text);
      })
      .finally(() => setIsSending(false));
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center 
      bg-linear-to-r from-blue-900 via-purple-800 to-pink-800 text-white">

     {!showPopup ? (
        <>
          <h1 className="text-4xl font-bold mb-8">🎂 Birthday Countdown 🎉</h1>
          <div className="flex gap-6 text-2xl font-semibold">
            <div>{timeLeft.days} <span className="text-sm font-normal">days</span></div>
            <div>{timeLeft.hours} <span className="text-sm font-normal">hrs</span></div>
            <div>{timeLeft.mins} <span className="text-sm font-normal">mins</span></div>
            <div>{timeLeft.secs} <span className="text-sm font-normal">secs</span></div>
          </div>
        </>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/60">
          <div className="bg-white text-pink-700 rounded-2xl p-8 shadow-2xl  flex flex-col items-center">
            <h2 className="text-4xl font-bold">🎉 Happy Birthday Pinkiii! 🎂</h2>
            <p className="text-lg mt-2 text-gray-700">You are going to 23 🩷</p>

            {/* ✨ Message box */}
            <form onSubmit={sendEmail} className="mt-5 flex flex-col gap-3 items-center w-full">
              <textarea
                placeholder="Kuch bolna h to bol..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-64 h-24 p-2 rounded-md border-2 border-pink-300 text-gray-800 resize-none"
              />
              <button
                type="submit"
                disabled={isSending}
                className="bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-600 transition-all"
              >
                {isSending ? "Sending..." : "Send 💌"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Second;
