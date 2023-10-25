export default function useTime () {
    
    function convert (seconds) {

        const dateInstance = new Date()
    
        return dateInstance.toLocaleString(seconds)
    
    }

    return { convert }

}