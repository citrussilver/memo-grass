import { watch } from 'vue';
import { toast } from 'bulma-toast'

export function useWatchCharacters(valueToWatch, maxChars = 100) {
    
    watch(valueToWatch, (newValue, oldValue) => {
        
        // test to intercept characters > 100
        if(newValue.length > maxChars) {
            toast({
                message: `Sorry! Only ${maxChars} characters are allowed.`,
                duration: 3000,
                type: 'is-danger',
                position: "top-center",
                dismissible: true,
                pauseOnHover: true,
                closeOnClick: true
            })
    
            valueToWatch.value = newValue.slice(0, maxChars)
        }
    })
}