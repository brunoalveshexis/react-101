import requester from '../requester'

export default async (query) => {
    const result = await requester.get(`/search/users?q=${query}`);

    const { data: { items } } = result;

    return items;
}