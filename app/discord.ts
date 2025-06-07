const getPepsiMembersCount = async (): Promise<number> => {
    const response = await fetch(
        `https://discord.com/api/v10/guilds/${process.env.SERVER_ID}?with_counts=true`,
        {
            headers: {
                authorization: `Bot ${process.env.BOT_TOKEN}`
            },
            cache: 'force-cache',
            next: {
                revalidate: 300
            }
        }
    );

    if (!response.ok) throw Error('Cannot fetch discord data');
    const json = await response.json();
    return json['approximate_member_count'];
};

export default getPepsiMembersCount;
