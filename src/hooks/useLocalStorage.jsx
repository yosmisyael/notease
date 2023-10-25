export default function useLocalStorage () {
    
    function setItem (key, value) {

        localStorage.setItem(key, value)
            
    }

    function getItem (key) {
    
        const value = localStorage.getItem(key)

        return value
    }

    function removeItem (key) {
    
        localStorage.removeItem(key)

    }

    return { setItem, getItem, removeItem }

}