import requester from "../requester";

export default async (user) => {
    const result = await requester.get(`/users/${user}`);

    return result;
}