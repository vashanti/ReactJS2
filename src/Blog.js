import React, { useState } from 'react';

function Blog() {
    const title = useState("This is my Blog Page");
    
    return (
        <h1>{title}</h1>
      );
}

export default Blog;