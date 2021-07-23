const newCommentHandler = async (event) => {
    event.preventDefault();
  
    if (event.target.hasAttribute('data-id')) {
        const post_id = event.target.getAttribute('data-id');

    const comment_body = document.querySelector('#comment-text').value.trim();
    // const needed_funding = document.querySelector('#project-funding').value.trim();
    // const description = document.querySelector('#project-desc').value.trim();
  
    if (post_id && comment_body) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ post_id, comment_body}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        alert('Failed to create comment');
      } 
    }
  };
}
  
  //Delete comment with passed in id
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });
  
      //stay on the same page? Look at requirements
    //   if (response.ok) {
    //     document.location.replace('/profile');
    //   } else {
    //     alert('Failed to delete project');
    //   }
    }
  };
  
  //This won't be the form, you'll have to event delegate
  //get it from the 
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);
  