import TodoList from "../components/todo/TodoList";
import BasicLayout from "../layouts/BasicLayout";


const MainPage = () => {

  console.log("Main");
  return ( 
    <BasicLayout>
      <div className="bg-main h-[90vh] bg-cover bg-no-repeat">
      </div>
      <TodoList></TodoList>
    </BasicLayout>
   );
}
 
export default MainPage;