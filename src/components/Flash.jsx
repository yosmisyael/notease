import { MdError, MdClose, MdCheckCircle } from 'react-icons/md'

export default function Flash ({ type, message, handleClose }) {
    switch (type) {
        case 'success':
            return (
                <div id="alert-border-2" className="flex items-center p-4 border-l-4 border-green-500 bg-black text-green-500 rounded-lg" role="alert">
                    <MdCheckCircle size={24} />
                    <div className="ml-3 text-sm font-medium">
                        {message}
                    </div>
                    <button type="button" onClick={handleClose} className="ml-2 -my-1.5 bg-black text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-green-800 inline-flex items-center justify-center h-8 w-8"  data-dismiss-target="#alert-border-2" aria-label="Close">
                    <span className="sr-only">Dismiss</span>
                    <MdClose size={24} className='text-green-500' />
                    </button>
                </div>
            )
        default:
            return (
                <div id="alert-border-2" className="flex items-center p-4 border-l-4 border-red-500 bg-black text-red-500 rounded-lg" role="alert">
                    <MdError size={24} />
                    <div className="ml-3 text-sm font-medium">
                        {message}
                    </div>
                    <button type="button" onClick={handleClose} className="ml-2 -my-1.5 bg-black text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 hover:bg-red-800 inline-flex items-center justify-center h-8 w-8"  data-dismiss-target="#alert-border-2" aria-label="Close">
                    <span className="sr-only">Dismiss</span>
                    <MdClose size={22} />
                    </button>
                </div>
            )
    }
}