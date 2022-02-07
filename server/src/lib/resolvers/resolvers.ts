const resolvers = {
    Query: {
        user: async (parent, { username }, { db }) => await db.collection('real_users').findOne({ username }),
        totalUsers: async (parent, args, { db }) => await db.collection('real_users').estimatedDocumentCount(),
        allUsers: async (parent, args, { db }) => await db.collection('real_users').find().sort({ name: 1 }).toArray(),
        getDate: async (parent, args, { db }) => {
            const date = await db.collection('dates').findOne();
            return date.fetchDate.minutes;
        }
    }
};

export default resolvers;