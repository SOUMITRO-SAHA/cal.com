import Page from "@pages/apps/[slug]/setup";
import { withAppDirSsr } from "app/WithAppDirSsr";
import { _generateMetadata } from "app/_utils";
import { WithLayout } from "app/layoutHOC";
import type { InferGetServerSidePropsType } from "next";

import { getServerSideProps } from "@calcom/app-store/_pages/setup/_getServerSideProps";

export const generateMetadata = async ({ params }: { params: Record<string, string | string[]> }) => {
  return await _generateMetadata(
    () => `${params.slug}`,
    () => ""
  );
};

type T = InferGetServerSidePropsType<typeof getServerSideProps>;

const getData = withAppDirSsr<T>(getServerSideProps);

export default WithLayout({ getLayout: null, Page, getData });
