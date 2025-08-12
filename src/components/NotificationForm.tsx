import { QueryClient } from "@tanstack/react-query";

export const NotificationForm = () => {
  const queryClient = new QueryClient();

  const user = queryClient.getQueryData(["user"]);


  return (
    <div>
      <h2>Form</h2>
      <button >Submit</button>

      {!user &&
        <div className="fixed inset-0 flex items-center justify-center bg-white/20">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
            <h2 className="text-lg flex justify-center items-center text-black font-semibold">
              Please login to set notifications!
            </h2>
          </div>
        </div>
      }
    </div>

  );
};
