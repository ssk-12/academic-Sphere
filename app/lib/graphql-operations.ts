import { gql } from '@apollo/client';

export const FIND_USER_BY_EMAIL_QUERY = gql`
  query FindUserByEmail($email: String!) {
    users(distinct_on: email, where: {email: {_eq: $email}}) {
      id
      name
      email
      password
    }
  }
`;

export const CREATE_USER_MUTATION = gql`
  mutation insert_user($email: String!, $password: String!, $name: String) {
    insert_users_one(object: {
      email: $email,
      password: $password,
      name: $name
    }) {
      id
      email
      name
    }
  }
`;

export const CREATE_CLASS_MUTATION = gql`
mutation insert_class($host_id:uuid, $name:String,$subject:String) {
  insert_classes_one(object: {host_id: $host_id, name: $name, subject: $subject}) {
    id
  }
}
`


// export const FETCH_USER_CLASSES = gql`
// query FETCH_USER_CLASSES($id: uuid!) {
//   users(where: {id: {_eq: $id}}) {
//     classes {
//       id
//       name
//       subject
//       host_id
//       user{
//         name
//       }
//     }
//   }
// }

// `

export const FETCH_USER_CLASSES = gql`
query FETCH_USER_CLASSES($id: uuid!) {
  class_enrollments(where: {user_id: {_eq: $id}}) {
    class {
      id
      host_id
      name
      subject
      user{
        name
      }
    }
  }
  classes(where: { host_id: {_eq:$id }}) {
    id
      host_id
      name
      subject
      user {
        name
      }
  }
}

`


export const FETCH_CLASS = gql`
query FETCH_CLASS($class_id: uuid!) @cached {
  class_enrollments(where: {class_id: {_eq: $class_id}}) {
    id
    class {
      host_id
      user {
        name
      }
      id
      name
      subject
    }
    user {
      name
      id
    }
  }
  classes(where: {id: {_eq: $class_id}}) {
    name
    subject
    id
    host_id
    user{
      name
    }
  }
}


`

export const ENROLL_INTO_CLASS = gql`
mutation enroll($class_id: uuid, $user_id:uuid) {
  insert_class_enrollments_one(object: {class_id: $class_id, user_id: $user_id}) {
    id
  }
}
`

export const CREATE_EVENT = gql`
mutation CreateEvent($class_id: uuid!, $host_id: uuid!, $location: String!, $name: String!, $proximity: float8!, $timestamp: timestamptz!) {
  insert_events_one(object: {
    class_id: $class_id,
    host_id: $host_id,
    location: $location,
    name: $name,
    proximity: $proximity,
    timestamp: $timestamp
  }) {
    id
  }
}
`;

export const FETCH_EVENT = gql`
query Fetch_ev($class_id: uuid!) {
  events(where: {class_id: {_eq: $class_id}}) {
    id
    name,
    host_id,
    timestamp
    user{
      name
    }
    proximity
    location
  }
}

`