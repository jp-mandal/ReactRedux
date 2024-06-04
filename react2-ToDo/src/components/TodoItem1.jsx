function TodoItem1() {
  let item = "Buy Milk";
  let date = "4/10/2023";
  return (
    <div class="row kg-row">
      <div class="col-6">{item}</div>
      <div class="col-4">{date}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger kg-button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem1;
