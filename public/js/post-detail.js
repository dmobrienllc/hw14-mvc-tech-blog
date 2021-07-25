const newCommentHandler = async (event) => {
  event.preventDefault();

  if (event.target.hasAttribute('data-id')) {
    const post_id = event.target.getAttribute('data-id');
    const comment_body = document.querySelector('#comment-text').value.trim();

    if (post_id && comment_body) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ post_id, comment_body }),
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
  console.log("We hit delbutton");

  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });
  }
};

//This won't be the form, you'll have to event delegate
//get it from the 
// document
//   .querySelector('.new-comment-form')
//   .addEventListener('submit', newFormHandler);

document
  .querySelector('.comment-list')
  .addEventListener('click', delButtonHandler);
