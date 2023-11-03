const ActivityApplication = function(props) {
    // State variable to show whether we're loading data or not.
    // Defaults to "true" to show a loading screen until we get our data from the API
    const [isLoading, setIsLoading] = useState(true);
    // State variable where we'll save our list of Activity
    const [Activity, setActivity] = useState([]);
  
    // API client needs to be initialized as per above and passed 
    // to the component
    const client = props.client;  
  
    // This effect will be called when the component mounts and fetch the data
    // from our API
    useEffect(
      () => {
        client.ActivityList().then((result) => {
          // when we get the data back we set it in our state variable
          setActivity(result.results);
          // and unset the "loading" flag
          setIsLoading(false);  
        });
      }, 
      [], // this argument will prevent continually hitting the APIs on state changes.
    );  
  
    // Show a loading state if we haven't gotten data back yet
    if (isLoading) {
      return <p>Activity data is loading...</p>;
    }
    // Show an "empty" state if we have no Activity
    if (Activity.length === 0) {
      return <p>No Activity found!</p>;
    } else {
      // Show our Activity list component with the data we got back
      return <ActivityList Activity={Activity} />;
    }
  }

  const ActivityList = function(props) {
    // This component renders a table of Activity
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          {
            props.Activity.map((activity, index) => {
              return (
                <tr key={index}>
                  <td>{activity.name}</td>
                  <td>{activity.activitycat}</td>
                 </tr>
              );
            })
          }
          </tbody>
      </table>
    );
  };

