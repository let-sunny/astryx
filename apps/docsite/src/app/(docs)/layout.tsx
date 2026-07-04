// Copyright (c) Meta Platforms, Inc. and affiliates.

import {getDefaultIsMobile} from '../../lib/serverMobileHint';
import {DocsShell} from '../../components/DocsShell';
import {SiteFooter} from '../../components/SiteFooter';
import {components} from '../../generated/componentRegistry';
import {packages} from '../../generated/packageRegistry';
import {docTopics} from '../../generated/docsRegistry';
import {templates} from '../../generated/templateRegistry';

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultIsMobile = await getDefaultIsMobile();

  return (
    <DocsShell
      components={components}
      packages={packages}
      docTopics={docTopics}
      templates={templates}
      defaultIsMobile={defaultIsMobile}>
      {children}
      <SiteFooter />
    </DocsShell>
  );
}
