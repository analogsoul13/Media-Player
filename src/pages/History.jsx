import React from 'react'

function History() {
  return (
    <>
      <h3>Watch History</h3>
      <table className='table table-dark'>
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Video URL</td>
            <td>Date and Time</td>
            <td></td>
          </tr>

        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>The Script - Hall of Fame</td>
            <td>https://youtu.be/mk48xRzuNvA?si=aoQeghr2jZ42MnXl</td>
            <td>05-09-2024</td>
            <td>
              <button className='btn'>
                <i className="fa-solid fa-trash-can fa-xl" style={{ color: "red", }} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default History