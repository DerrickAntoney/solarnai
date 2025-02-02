import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MessageIcon from '@mui/icons-material/Message';

const FloatingButton = () => {
  return (
    <div className="relative min-h-screen">
        <Fab
        color="primary"
        aria-label="whatsapp"
        href="https://wa.me/+254740618520" // Replace with your WhatsApp link
        className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-10"
      >
        <WhatsAppIcon />
      </Fab>

      {/* Floating Message Button */}
      <Fab
        color="primary"
        aria-label="message"
        href="sms:+254740618520" // Replace with your message link
        className="fixed bottom-24 right-6 sm:bottom-10 sm:right-20 z-10"
      >
        <MessageIcon />
      </Fab>
    </div>
  )
}

export default FloatingButton