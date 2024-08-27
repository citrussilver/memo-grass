import { watch } from 'vue';
import { toast } from 'bulma-toast'
import consts from '@/constants/constants';

export function useWatchCharacters(valueToWatch, maxChars = consts.character_limit) {
    
    watch(valueToWatch, (newValue, oldValue) => {
        
        // test to intercept characters > 160
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