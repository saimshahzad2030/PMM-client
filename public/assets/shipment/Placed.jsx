const PlacedIcon = ({ color }) => (
    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 14H22.5" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.5 18H22.5" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M26.5 5H6.5C5.94772 5 5.5 5.44772 5.5 6V26C5.5 26.5523 5.94772 27 6.5 27H26.5C27.0523 27 27.5 26.5523 27.5 26V6C27.5 5.44772 27.0523 5 26.5 5Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.5 5V27" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    );
    
    export default PlacedIcon;