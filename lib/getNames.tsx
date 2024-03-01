import getSortedLeaderboard from './getSortedLeaderboard';
const AIRSTACK_API_URL = 'https://api.airstack.xyz/graphql';
const getNames = async (rawData: any[]) => {
  const buyers = rawData.map((item) => item.buyer);
  const query = ` query MyQuery($buyers: [Address!]!, $identities:[Identity!]!){
    Socials(
      input: {filter: {identity: {_in: $identities}}, blockchain: ethereum, limit:200}
    ) {
      Social {
        userAssociatedAddresses
        dappName
        profileName
        coverImageURI
        fnames
        profileImage
        profileUrl
        followerCount
      }
    }
      Domains(
        input: {filter: {resolvedAddress: {_in: $buyers},isPrimary: {_eq: true}}, blockchain: ethereum, limit:200}
      ) {
        Domain {
          resolvedAddress
          name
          isPrimary
          avatar
        }
      }
    }`;
  const variables = {
    buyers,
    identities: buyers,
  };
  try {
    const res = await fetch(AIRSTACK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${process.env.NEXT_PUBLIC_AIRSTACK_API_KEY}`, // Add API key to Authorization header
      },
      body: JSON.stringify({ query, variables }),
    });
    const data = await res.json();
    const [domains, socials] = [data?.data?.Domains?.Domain, data?.data?.Socials?.Social];
    const addressToProfile: any = {};
    const addressToSocial: any = {};
    domains.forEach((domain: any) => {
      addressToProfile[domain.resolvedAddress] = {
        name: domain.name,
        avatar: domain.avatar,
      };
    });
    socials.forEach((social: any) => {
      social.userAssociatedAddresses.forEach((address: any) => {
        addressToSocial[address] = {
          profileName: social.profileName,
          profileImage: social.profileImage,
          profileUrl: social.profileUrl,
        };
      });
    });

    const dataWithNamesAndAvatars = rawData.map((item) => {
      const social = addressToSocial[item.buyer];
      const profile = addressToProfile[item.buyer];
      return {
        ...item,
        profileName: social?.profileName || profile?.name,
        profileImage: social?.profileImage || profile?.avatar,
        profileUrl: social?.profileUrl,
      };
    });
    return getSortedLeaderboard(dataWithNamesAndAvatars);
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getNames;
