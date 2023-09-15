import { useEffect } from 'react';

export default function Ad(){
    useEffect(() => {(window.adsbygoogle = window.adsbygoogle || []).push({});},[]);
    return (
        <ins class="adsbygoogle" 
        data-ad-format="fluid" 
        data-ad-layout-key="-hu+4+18-27-l" 
        data-ad-client="ca-pub-3801473523911740" 
        data-ad-slot="9500113397"></ins>
    )
}